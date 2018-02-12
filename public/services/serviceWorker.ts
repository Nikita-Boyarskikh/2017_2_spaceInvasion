function registerServiceWorker(): void {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/SW.js", {scope: "/"})
  }
}

export default registerServiceWorker;
