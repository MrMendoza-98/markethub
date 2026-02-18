export function getVentureAction(v: {
  whatsapp?: string
  phone?: string
  email?: string
  website?: string
  instagram?: string
}) {
  if (v.whatsapp) {
    return {
      label: "WhatsApp",
      href: `https://wa.me/${v.whatsapp}`,
      external: true
    }
  }

  if (v.phone) {
    return {
      label: "Llamar",
      href: `tel:${v.phone}`,
      external: false
    }
  }

  if (v.email) {
    return {
      label: "Email",
      href: `mailto:${v.email}`,
      external: false
    }
  }

  if (v.website) {
    return {
      label: "Sitio Web",
      href: v.website,
      external: true
    }
  }

  if (v.instagram) {
    return {
      label: "Instagram",
      href: `https://instagram.com/${v.instagram}`,
      external: true
    }
  }

  return null
}
