/**
 * Cloudinary Upload Hook
 * Client-side unsigned upload to Cloudinary
 */

import { useCallback } from 'react';

interface CloudinaryUploadResult {
  url: string;
  publicId: string;
  format: string;
  width: number;
  height: number;
}

interface UseCloudinaryUploadOptions {
  cloudName: string;
  uploadPreset: string;
  folder?: string;
  onSuccess?: (result: CloudinaryUploadResult) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook to upload images to Cloudinary
 * Uses Cloudinary Upload Widget for easy integration
 */
export const useCloudinaryUpload = (options: UseCloudinaryUploadOptions) => {
  const { cloudName, uploadPreset, folder = 'chat-bot', onSuccess, onError } = options;

  const openUploadWidget = useCallback(() => {
    // Check if Cloudinary widget script is loaded
    if (!(window as any).cloudinary) {
      onError?.(new Error('Cloudinary widget not loaded'));
      return;
    }

    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        folder,
        sources: ['local', 'camera', 'url'],
        multiple: false,
        maxFileSize: 5000000, // 5MB
        clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
        maxImageWidth: 2000,
        maxImageHeight: 2000,
        theme: 'minimal',
      },
      (error: any, result: any) => {
        if (error) {
          onError?.(error);
          return;
        }

        if (result.event === 'success') {
          const uploadResult: CloudinaryUploadResult = {
            url: result.info.secure_url,
            publicId: result.info.public_id,
            format: result.info.format,
            width: result.info.width,
            height: result.info.height,
          };
          onSuccess?.(uploadResult);
        }
      }
    );

    widget.open();
  }, [cloudName, uploadPreset, folder, onSuccess, onError]);

  return { openUploadWidget };
};

/**
 * Simple file upload to Cloudinary (without widget)
 * For direct file input
 */
export const uploadToCloudinary = async (
  file: File,
  cloudName: string,
  uploadPreset: string,
  folder = 'chat-bot'
): Promise<CloudinaryUploadResult> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('folder', folder);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  const data = await response.json();
  return {
    url: data.secure_url,
    publicId: data.public_id,
    format: data.format,
    width: data.width,
    height: data.height,
  };
};
