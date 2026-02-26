export const trackEvent = (event: string, payload?: Record<string, string>) => {
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload || {});
  }
};
