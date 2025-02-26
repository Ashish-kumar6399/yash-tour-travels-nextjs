// components/Breadcrumb.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    const pathSegments = pathWithoutQuery.split('/').filter((segment) => segment);

    const breadcrumbPaths = pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      return { href, label: decodeURIComponent(segment) };
    });

    setBreadcrumbs(breadcrumbPaths);
  }, [router.asPath]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        <li>
          <Link href="/">
            <a className="text-blue-600 hover:underline">Home</a>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            <span className="mx-2">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-500">{breadcrumb.label}</span>
            ) : (
              <Link href={breadcrumb.href}>
                <a className="text-blue-600 hover:underline">{breadcrumb.label}</a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
