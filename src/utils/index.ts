export function createTagPageSlug(tagName: string): string {
  return tagName.toLocaleLowerCase().replace(/ /g, "-");
}

export function createTagPageLink(tagName: string): string {
  return `/tags/${createTagPageSlug(tagName)}/`;
}
