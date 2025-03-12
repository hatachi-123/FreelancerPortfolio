import { motion } from "framer-motion";

interface ArrowProps {
  href: string;  // 遷移先のリンクを受け取るためのプロパティ
}

export default function Arrow({ href }: ArrowProps) {
  return (
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href={href}  // 固定値の"#about"から、propsで受け取ったhrefに変更
          className="text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
        </a>
      </motion.div>
  );
}