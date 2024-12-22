export function formatName(fullName: string) {
  const parts = fullName.split(" ");
  if (parts.length < 3) {
    return fullName;
  }
  const lastName = parts[0];
  const firstNameInitial = parts[1].charAt(0).toUpperCase();
  const middleNameInitial = parts[2].charAt(0).toUpperCase();
  return `${lastName} ${firstNameInitial}.${middleNameInitial}`;
}
