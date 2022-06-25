/**
 * A minimal build of CKEditor 5 
 */
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Bold, Code, Italic, Strikethrough, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Clipboard } from "@ckeditor/ckeditor5-clipboard";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { 
    FontBackgroundColor,
    FontColor,
    FontSize
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { InlineEditor } from "@ckeditor/ckeditor5-editor-inline";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { List, ListProperties } from "@ckeditor/ckeditor5-list";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office"
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { Table } from "@ckeditor/ckeditor5-table";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { ClickObserver } from "@ckeditor/ckeditor5-engine"

export async function create(domElement, config) {
    const editor = await InlineEditor.create(domElement, {
        ...{
            plugins: [
                BlockQuote,
                Bold,
                Clipboard,
                Code,
                Essentials,
                FontBackgroundColor,
                FontColor,
                FontSize,
                Heading,
                HorizontalLine,
                Indent,
                IndentBlock, 
                Italic,
                List,
                ListProperties,
                Paragraph,
                PasteFromOffice,
                RemoveFormat,
                Strikethrough,
                Table,
                Underline,
                Undo
            ]
        },
        heading: {
            options: [
                { model: "heading1", view: "h1" },
                { model: "heading2", view: "h2" },
                { model: "heading3", view: "h3" },
            ]
        },
        typing: {
            undoStep: 5
        },
        toolbar: {
            items: []
        },
        table: {
            contentToolbar: [
                "tableColumn",
                "tableRow",
                "mergeTableCells"
            ]
        },
        language: "en",
        ...config
    });

    // Add a ClickObserver
    editor.editing.view.addObserver(ClickObserver);

    return editor;
}

