export const formatImageUrl = (url) => {
  if (!url) return '';
  if (typeof url !== 'string') return url;
  if (url.includes('dummy')) {
    return 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80';
  }
  const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1] && url.includes('drive.google.com')) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return url;
};
