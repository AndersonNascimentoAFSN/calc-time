import { Conversor } from "@/app/[lang]/components"
import { type IDictionary } from "@/dictionaries/type";
import { getDictionary } from "@/get-dictionary"

import { type Locale } from "@/i18n-config"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary: IDictionary = await getDictionary(lang)


  return (
    <main>
      <Conversor dictionary={dictionary}/>
    </main>
  );
}
