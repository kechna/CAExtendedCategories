import { SubMod, Translations } from "@pz/console";
import type { Translated } from "./types.ts";

export abstract class CAECModule<T extends string = string> extends SubMod {
  public override async compile(): Promise<void> {
    const igui = new Translations.IGUI();

    Object.entries(this.getTranslations()).forEach(([language, keys]: [string, Record<string, string>]) => {
      igui.translate(language, keys);
    });

    this.addFiles(igui.getFiles());

    return super.compile();
  }

  protected abstract getTranslations(): Translated<T>;
}
