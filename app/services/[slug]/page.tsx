import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { createPageMetadata } from "@/lib/site";
import { getService, serviceDefinitions, servicePath } from "@/lib/services";

export const dynamicParams = false;
export function generateStaticParams() { return serviceDefinitions.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = serviceDefinitions.find((item) => item.slug === slug); return service ? createPageMetadata({ title: service.title, description: service.metaDescription, path: servicePath(service) }) : {}; }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!serviceDefinitions.some((service) => service.slug === slug)) notFound(); return <ServiceDetailPage service={getService(slug)} />; }
