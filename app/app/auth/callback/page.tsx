"use client";

import { useEffect, useState } from "react";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState("Processing callback...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const state = params.get("state");
    const error = params.get("error");

    if (error) {
      setStatus(`Authentication error: ${error}`);
      return;
    }

    if (!code) {
      setStatus("No authorization code was provided.");
      return;
    }

    // Provider-specific authentication should be handled
    // by your authorized authentication implementation.
    setStatus(
      state
        ? "Callback received successfully."
        : "Callback received, but no state parameter was provided."
    );
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Authentication Callback</h1>
      <p>{status}</p>
    </main>
  );
}
