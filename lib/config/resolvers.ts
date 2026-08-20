import { BRAND, DEFAULT_PHONE, DEFAULT_SAME_DAY_SERVICE } from "@/lib/config/site";
import type { Market, PhoneConfig, SameDayServiceConfig } from "@/lib/types";

/**
 * All same-day / phone claims on the site must be resolved through these
 * helpers rather than reading DEFAULT_* constants directly, so that a
 * market override (or a future per-campaign override) is always respected.
 */

export function getSameDayConfig(market?: Market): SameDayServiceConfig {
  if (!market?.sameDayService) return DEFAULT_SAME_DAY_SERVICE;
  return { ...DEFAULT_SAME_DAY_SERVICE, ...market.sameDayService };
}

export function getPhone(market?: Market): PhoneConfig {
  return market?.phone ?? DEFAULT_PHONE;
}

/** The three-part brand positioning line, e.g. "Humane. Local. Same-Day Service." */
export function getPositioningLine(market?: Market): string {
  const sameDay = getSameDayConfig(market);
  const phrase = sameDay.enabled ? sameDay.headlinePhrase : sameDay.fallbackHeadlinePhrase;
  return `Humane. Local. ${phrase}.`;
}

/** The fuller supporting sentence used near CTAs and in FAQ answers. */
export function getSameDayMessage(market?: Market): string {
  const sameDay = getSameDayConfig(market);
  return sameDay.enabled ? sameDay.qualificationMessage : sameDay.disabledMessage;
}

export function getBrandName(market?: Market): string {
  return market ? market.brandName : BRAND.name;
}

/**
 * The homepage/market hero headline. Kept centralized (rather than a
 * hard-coded string in the Hero component) so the same-day promise can
 * never linger in the headline after the config is switched off.
 */
export function getHeroHeadline(market?: Market): string {
  const sameDay = getSameDayConfig(market);
  return sameDay.enabled ? "Wildlife problem? We can be there today." : "Wildlife problem? We respond fast.";
}
