import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import NextSection from "@/components/NextSection";
import SecondLayout from "@/components/SecondLayout";

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <section>
        <Layout>
          <Hero />
        </Layout>
      </section>
      <section>
        <SecondLayout>
          <NextSection />
        </SecondLayout>
      </section>
    </main>
  );
}
