/**
 * External dependencies
 */
import AceEditor from 'react-ace';
import 'brace/mode/css';
import 'brace/mode/javascript';
import 'brace/snippets/css';
import 'brace/snippets/javascript';
import 'brace/snippets/text';
import 'brace/ext/language_tools';

/**
 * WordPress dependencies
 */
const {
    Component,
} = wp.element;

/**
 * Component Class
 */
export default class CodeEditor extends Component {
    render() {
        const {
            value,
            onChange,
            mode,
            maxLines,
            minLines,
            codePlaceholder,
        } = this.props;

        return (
            <AceEditor
                className="vpf-component-code-editor"
                theme="textmate"
                onLoad={ ( editor ) => {
                    editor.renderer.setScrollMargin( 16, 16, 16, 16 );
                    editor.renderer.setPadding( 16 );
                } }
                fontSize={ 12 }
                showPrintMargin
                showGutter
                highlightActiveLine={ false }
                width="100%"
                setOptions={ {
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    printMargin: false,
                    tabSize: 2,
                } }
                editorProps={ {
                    $blockScrolling: Infinity,
                } }
                value={ value || codePlaceholder }
                onChange={ ( val ) => {
                    onChange( val === codePlaceholder ? '' : val );
                } }
                mode={ mode }
                maxLines={ maxLines }
                minLines={ minLines }
            />
        );
    }
}
