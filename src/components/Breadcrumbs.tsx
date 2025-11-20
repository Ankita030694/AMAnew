import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-[#D2A02A] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-[#D2A02A] transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
