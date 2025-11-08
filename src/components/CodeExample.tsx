export const CodeExample = () => {
  const codeSnippet = `// Define your schema with Drizzle ORM
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
});

// Create type-safe tRPC procedures
export const userRouter = t.router({
  create: t.procedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(async ({ input }) => {
      return await db.insert(users).values(input);
    }),
});

// Use it in your frontend with full type safety
const { mutate } = trpc.user.create.useMutation();
mutate({ name: 'John', email: 'john@example.com' });`;

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Write once,{" "}
              <span className="gradient-accent bg-clip-text text-transparent">type everywhere</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Define your database schema once and get instant type safety across your entire stack.
              No code generation needed.
            </p>
            <ul className="space-y-4">
              {[
                "Automatic type inference from database to frontend",
                "Zero runtime overhead with compile-time checks",
                "Refactor with confidence using TypeScript",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-accent opacity-20 blur-2xl rounded-2xl" />
            <pre className="relative bg-card border border-border rounded-2xl p-6 overflow-x-auto">
              <code className="text-sm text-foreground font-mono leading-relaxed">{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
