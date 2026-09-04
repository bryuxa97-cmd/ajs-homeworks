export default function formatPhone(phone) {
  let digits = phone.replace(/\D/g, '');

  if (digits.length === 11 && digits.startsWith('8')) {
    digits = `7${digits.slice(1)}`;
  }

  return `+${digits}`;
}
