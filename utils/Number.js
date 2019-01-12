export function formatPrice(price) {
  return (price / 1000).toLocaleString() + 'K';
}
