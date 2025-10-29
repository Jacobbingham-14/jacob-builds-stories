export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hey — I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Jacob
              </span>
              .
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm endlessly curious about how things work — and how to make them better. Whether it's a product, a system, or a person, I love taking something raw and shaping it into something meaningful. That's what drives me as a builder and as a human.
            </p>

            <p>
              I study Strategic Management at BYU, but my real education has come from doing — starting projects, learning from failure, and chasing the spark of new ideas. For the past year, I've interned at Squak, an outdoor apparel company, where I've helped shape products, analyze markets, and turn ideas into reality.
            </p>

            <p>
              Outside of work, I spend hours every week exploring side projects — building a 1-on-1 challenge app, automating workflows with n8n, or experimenting with new AI tools just to see what's possible.
            </p>

            <p>
              I love creating things that bring people together, push me outside my comfort zone, or make life a little more playful. When I'm not building, I'm usually outside — running trails, hiking mountains, or finding stories worth telling.
            </p>

            <p className="text-foreground font-medium">
              At my core, I'm a builder who believes in people, progress, and the quiet joy of creating something from nothing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
