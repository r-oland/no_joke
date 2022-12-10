// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
import { DocumentDefinition } from 'sanity';
import { StructureResolver } from 'sanity/desk';

// like how "Post" and "Author" is handled.
export const aboutStructure =
  (typeDef: DocumentDefinition): StructureResolver =>
  (S) => {
    // The `About` root list item
    const aboutListItem = // A singleton not using `documentListItem`
      S.listItem()
        .title(typeDef.name)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
        );

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => listItem.getId() !== typeDef.name
    );

    return S.list()
      .title('Content')
      .items([aboutListItem, S.divider(), ...defaultListItems]);
  };
