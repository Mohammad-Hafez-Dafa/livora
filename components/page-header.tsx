"use client"

interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage?: string
}

export function PageHeader({ 
  title, 
  description,
  backgroundImage = "https://res.cloudinary.com/dd1bi4lzz/image/upload/v1760117759/2dc04281-d78b-4e2b-b9d6-ad0c9d0d9539_xfopkw.png"
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background with Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-off-white mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}