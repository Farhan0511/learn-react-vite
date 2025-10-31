# Belajar React + Vite dengan Atomic Design

Repository ini digunakan untuk belajar React dengan pendekatan Atomic Design untuk pengaturan struktur komponen agar lebih rapi, reusable, dan scalable.

Project dibuat menggunakan React + Vite dengan dukungan HMR (Hot Module Replacement) dan konfigurasi dasar ESLint.

## 🎯 Tujuan Project

- Belajar dasar React dengan environment Vite
- Menerapkan konsep Atomic Design dalam struktur komponen
- Membiasakan diri dengan arsitektur front-end yang digunakan di project production

## 🧩 Konsep Atomic Design

Struktur Atomic Design terdiri dari:

- **Atoms** — komponen kecil & dasar (Button, Input, Label)
- **Molecules** — gabungan beberapa atom (Form Input Group)
- **Organisms** — bagian UI yang lebih kompleks (Navbar, Form Section)
- **Templates** — layout halaman tanpa konten dinamis
- **Pages** — halaman akhir yang ditampilkan ke user

## 📦 Plugin Resmi React untuk Vite
- @vitejs/plugin-react (Babel / oxc)
- @vitejs/plugin-react-swc (SWC – lebih cepat)

## 💡 Catatan Belajar
- Komponen dibuat bertahap: Atom → Molecule → Organism → Template → Page
- Fokus pada reusable komponen & struktur yang bersih

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
