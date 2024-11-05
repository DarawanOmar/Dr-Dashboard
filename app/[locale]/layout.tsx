import { i18nConfig } from "@/i18nConfig";
import "@/app/[locale]/globals.css";
import { Metadata } from "next";
import LangLayout from "@/components/layout/lang-layout";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/side-bar";
import { Suspense } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import QueryClientProviderWrapper from "@/providers/query_provider_wrapper";
import {
  inter,
  sirwan_bold,
  sirwan_light,
  sirwan_meduim,
  sirwan_reguler,
} from "./fonts";
import ScrollToTopButton from "@/hooks/user-scroll-top";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Dr-Kurdistan",
    template: "%s - Dr-Kurdistan",
  },
  description:
    "Come and see The All Dr-Kurdistan Website and Book the best doctor in the Kurdistan",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      dir={locale === "ar" || locale === "kr" ? "rtl" : "ltr"}
    >
      <body>
        <NuqsAdapter>
          <LangLayout lang={locale}>
            <QueryClientProviderWrapper>
              <div
                className={cn(
                  ` ${inter.variable}  ${sirwan_bold.variable} ${sirwan_light.variable} ${sirwan_meduim.variable} ${sirwan_reguler.variable}`,
                  {
                    "debug-screens": process.env.NODE_ENV === "development",
                  }
                )}
              >
                <Suspense fallback={"Load"}>
                  <Header />
                </Suspense>
                <div className="flex flex-col lg:flex-row">
                  <Suspense fallback={"Load"}>
                    <SideBar />
                  </Suspense>
                  <div className="w-full h-screen overflow-auto border-s-[3px] border-t-[3px] max-lg:border-e-4 max-lg:rounded-tr-2xl border-primary rounded-tl-2xl min-h-screen p-4">
                    <ScrollToTopButton />
                    {children}
                    <Toaster />
                  </div>
                </div>
              </div>
            </QueryClientProviderWrapper>
          </LangLayout>
        </NuqsAdapter>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
