import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Works
          </h2>
          <Card className="bg-green-900/20 border-green-800">
            <CardContent className="p-12 flex flex-col items-center justify-center">
              <Construction className="h-16 w-16 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Portfolio Under Construction
              </h3>
              <p className="text-white/60 text-center max-w-md">
                最新のAIを活用したプロジェクト事例を準備中です。
                もうしばらくお待ちください。
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}