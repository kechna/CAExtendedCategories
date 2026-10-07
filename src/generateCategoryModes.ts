import { type FullModContext, Lua } from "@pz/console";
import { getCategoryModes } from "./categoryModes.ts";

/**
 * Written line by line, because Lua.Table can't align columns.
 */
export const generateCategoryModes = async (context: FullModContext): Promise<Lua.File> => {
  const entries = await getCategoryModes(context);
  const file = new Lua.SharedFile(`${context.modName}/Data/CAEC_CategoryModes`).setBasePath(context.baseDir);

  const quote = (value: string | undefined) => (undefined === value ? "nil" : `"${value}"`);
  const keyWidth = Math.max(0, ...entries.map(([key]) => `[${quote(key)}]`.length));
  const balancedWidth = Math.max(0, ...entries.map(([, balanced]) => quote(balanced).length));
  const liteWidth = Math.max(0, ...entries.map(([, , lite]) => quote(lite).length));

  const lines = entries.map(([key, balanced, lite], index) => {
    const comma = index < entries.length - 1 ? "," : "";
    const keyStr = `[${quote(key)}]`.padEnd(keyWidth);
    const balancedStr = quote(balanced).padEnd(balancedWidth);
    const liteStr = quote(lite).padEnd(liteWidth);

    return `  ${keyStr} = table.newarray( ${balancedStr}, ${liteStr} )${comma}`;
  });

  file.add(
    new Lua.Statement(
      ["---@type table<string, [string, string]>", "local CategoryModes = {", ...lines, "}"].join("\n"),
    ),
  );
  file.add("");
  file.add(new Lua.Statement("return CategoryModes"));

  return file;
};
