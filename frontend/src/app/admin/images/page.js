'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminImagesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    alt_text: '',
    category: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchImages();
    }
  }, [user]);

  const fetchImages = async () => {
    try {
      const { data, error: err } = await supabase
        .from('images')
        .select('*')
        .order('created_at', { ascending: false });

      if (err) throw err;
      setImages(data || []);
    } catch (err) {
      setError('Failed to fetch images: ' + err.message);
    } finally {
      setImagesLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!selectedFile) {
      setError('Please select an image file');
      return;
    }

    if (!formData.title) {
      setError('Title is required');
      return;
    }

    setUploading(true);

    try {
      // Upload file to Supabase Storage
      const fileName = `${Date.now()}-${selectedFile.name}`;
      const { error: uploadErr } = await supabase.storage
        .from('blog-images')
        .upload(`uploads/${fileName}`, selectedFile);

      if (uploadErr) throw uploadErr;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(`uploads/${fileName}`);

      // Save image metadata to database
      const { error: dbErr } = await supabase
        .from('images')
        .insert([
          {
            title: formData.title,
            description: formData.description,
            alt_text: formData.alt_text,
            category: formData.category,
            image_url: publicUrl,
            storage_path: `uploads/${fileName}`,
            file_size: selectedFile.size,
            mime_type: selectedFile.type,
            uploaded_by: user.id,
          },
        ]);

      if (dbErr) throw dbErr;

      setSuccess('Image uploaded successfully!');
      setFormData({
        title: '',
        description: '',
        alt_text: '',
        category: '',
      });
      setSelectedFile(null);
      fetchImages();
    } catch (err) {
      setError('Failed to upload image: ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id, storagePath) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      // Delete from storage
      if (storagePath) {
        await supabase.storage
          .from('blog-images')
          .remove([storagePath]);
      }

      // Delete from database
      const { error: err } = await supabase
        .from('images')
        .delete()
        .eq('id', id);

      if (err) throw err;
      fetchImages();
    } catch (err) {
      setError('Failed to delete image: ' + err.message);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h1>Image Management</h1>
            <p style={{ color: '#666', marginTop: '0.5rem' }}>Upload and manage images for blogs and pages</p>
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>
            <h2>Upload New Image</h2>
            <form onSubmit={handleUpload} style={{ marginTop: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Image File *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px dashed #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                />
                {selectedFile && (
                  <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Image title"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Image description"
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Alt Text
                  </label>
                  <input
                    type="text"
                    name="alt_text"
                    value={formData.alt_text}
                    onChange={handleInputChange}
                    placeholder="Alt text for accessibility"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g., Blog, Hero, Lifestyle"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={uploading}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: uploading ? '#ccc' : '#1F3D0C',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: uploading ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                }}
              >
                {uploading ? 'Uploading...' : 'Upload Image'}
              </button>
            </form>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {imagesLoading ? (
              <p>Loading images...</p>
            ) : images.length === 0 ? (
              <p style={{ color: '#666' }}>No images uploaded yet.</p>
            ) : (
              images.map(image => (
                <div
                  key={image.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={image.image_url}
                    alt={image.alt_text || image.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
                      {image.title}
                    </h3>
                    {image.category && (
                      <p style={{ margin: '0.25rem 0', fontSize: '0.85rem', color: '#666' }}>
                        Category: {image.category}
                      </p>
                    )}
                    <p style={{ margin: '0.25rem 0', fontSize: '0.85rem', color: '#999' }}>
                      {new Date(image.created_at).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => handleDelete(image.id, image.storage_path)}
                      style={{
                        marginTop: '1rem',
                        width: '100%',
                        padding: '0.5rem',
                        backgroundColor: '#ffebee',
                        color: '#d32f2f',
                        border: '1px solid #d32f2f',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
