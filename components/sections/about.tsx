import { Card, CardContent } from "@/components/ui/card";
import { Heart, History, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tentang Oxsika
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ditubuhkan untuk mengeratkan hubungan sepanjang hayat di kalangan
            alumni SBPI Kubang Pasu, Oxsika berperanan sebagai jambatan antara
            generasi lalu, kini, dan akan datang.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <History className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Sejarah Kami</h3>
                <p className="text-muted-foreground">
                  Ditubuhkan pada tahun 2010, Oxsika bermula sebagai sekumpulan
                  kecil alumni yang bersemangat dan kini berkembang menjadi
                  komuniti yang besar dengan ribuan ahli.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Target className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Misi Kami</h3>
                <p className="text-muted-foreground">
                  Untuk mewujudkan rangkaian yang kukuh yang menyokong
                  pertumbuhan profesional, bimbingan, dan kecemerlangan
                  berterusan dalam pendidikan.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Nilai Kami</h3>
                <p className="text-muted-foreground">
                  Kesatuan, Kecemerlangan, dan Perkhidmatan - prinsip teras yang
                  memandu komuniti dan inisiatif kami.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* 
        <div className="mt-12 text-center">
          <Button size="lg">
            Ketahui Lebih Lanjut Tentang Perjalanan Kami
          </Button>
        </div> */}
      </div>
    </section>
  );
}
