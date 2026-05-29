export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm text-muted-foreground mb-3">
            Last updated: May 29, 2026
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Terms of Service
          </h1>

          <p className="text-muted-foreground text-lg leading-8 max-w-3xl">
            These Terms of Service outline the rules, limitations, and usage
            conditions for accessing this portfolio website.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Website Purpose</h2>

            <p className="text-muted-foreground leading-8">
              This website is provided for informational, educational, and
              portfolio purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Intellectual Property
            </h2>

            <div className="space-y-4 text-muted-foreground leading-8">
              <p>
                All content on this website including projects, designs, code,
                text, and graphics belongs to Rajesh Paudel unless otherwise
                stated.
              </p>

              <p>
                Unauthorized copying, redistribution, or commercial use is not
                permitted without permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. External Links</h2>

            <p className="text-muted-foreground leading-8">
              This website may contain links to third-party websites or
              services. No responsibility is taken for their content, privacy
              policies, or practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. No Warranties</h2>

            <p className="text-muted-foreground leading-8">
              The information provided on this website is offered “as is”
              without warranties regarding accuracy, reliability, or
              availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitation of Liability
            </h2>

            <p className="text-muted-foreground leading-8">
              Rajesh Paudel shall not be held liable for damages or losses
              resulting from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Changes to These Terms
            </h2>

            <p className="text-muted-foreground leading-8">
              These terms may be updated or modified at any time without prior
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>

            <div className="text-muted-foreground leading-8">
              <p>For questions regarding these Terms:</p>

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
