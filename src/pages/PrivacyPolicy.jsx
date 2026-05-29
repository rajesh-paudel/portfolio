export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm text-muted-foreground mb-3">
            Last updated: May 29, 2026
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground text-lg leading-8 max-w-3xl">
            This Privacy Policy explains how information may be collected, used,
            and protected while using this portfolio website.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>

            <div className="space-y-4 text-muted-foreground leading-8">
              <p>
                This website may collect limited personal information when you:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Submit a contact form</li>
                <li>Send an inquiry through email</li>
                <li>Interact with website analytics tools</li>
              </ul>

              <p>
                Information may include your name, email address, and message
                content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. How Information Is Used
            </h2>

            <div className="space-y-4 text-muted-foreground leading-8">
              <p>Collected information may be used to:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries</li>
                <li>Improve website performance and experience</li>
                <li>Maintain website security and prevent spam</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Cookies & Analytics
            </h2>

            <p className="text-muted-foreground leading-8">
              This website may use cookies or third-party analytics services to
              better understand visitor interactions and improve the overall
              browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Third-Party Services
            </h2>

            <p className="text-muted-foreground leading-8">
              This website may integrate third-party services including hosting,
              analytics, email handling, and external links. These services may
              collect information according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>

            <p className="text-muted-foreground leading-8">
              Reasonable efforts are made to protect submitted information, but
              no method of transmission over the internet can be guaranteed as
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>

            <div className="text-muted-foreground leading-8">
              <p>If you have questions regarding this Privacy Policy:</p>

              <div className="mt-4">
                <p className="font-medium text-foreground">Rajesh Paudel</p>
                <p>rajeshpaudel9863@email.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
