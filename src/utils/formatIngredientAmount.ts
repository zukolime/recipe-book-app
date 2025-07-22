const parseAmount = (raw: string): { value: number; unit: string } | null => {
  const match = raw.match(/^([\d.]+)\s*([a-zA-Z]+)?/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const unit = match[2] || "";

  return { value, unit };
};

const formatWeight = (amount: number, unit: string): string => {
  if (unit === "g" && amount >= 1000) {
    return `${(amount / 1000).toFixed(1)} kg`;
  }
  return `${amount} ${unit || ""}`;
};

export const formatIngredientAmount = (
  raw: string,
  servings: number,
  unit: string
): string => {
  const [metricPart] = raw.split("/");
  const parsed = parseAmount(metricPart.trim().toLowerCase());
  if (!parsed) return raw;

  const scaled = parsed.value * servings;
  return formatWeight(scaled, unit);
};
