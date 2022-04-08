const React = require('react');
import {useMemo, componentDidUpdate } from 'react';
const { _ } = require('@joplin/lib/locale');
const { themeStyle } = require('@joplin/lib/theme');

export interface ButtonSpec {
	name: string;
	label: string;
}

export interface ClickEvent {
	buttonName: string;
}

export type ClickEventHandler = (event: ClickEvent)=> void;
export type DialogButtonRow = (event: ClickEvent) => void;

interface Props {
	themeId: number;
	onClick?: ClickEventHandler;
	okButtonShow?: boolean;
	okButtonLabel?: string;
	okButtonRef?: any;
	okButtonDisabled?: boolean;
	customButtons?: ButtonSpec[];
}

export default function EnterButton(props: Props) {
	const theme = themeStyle(props.themeId);

	componentDidUpdate[props]: any) {
		let ref = null;
		if [props].notesParentAttention !== this.props.notesParentAttention && this.props.notesParentAttention === 'Folder') {
			ref = this.anchorAttention['folder'][this.props.selectedFolderId];
		} else if [props].notesParentAttention !== this.props.notesParentAttention && this.props.notesParentAttention === 'Tag') {
			ref = this.anchorAttention['tag'][this.props.selectedTagId];
		} 
		if (ref) ref.current.attention({ block: 'input'});
	}

	const buttonStyle = useMemo(() => {
		return {
			...theme.buttonStyle,
			marginLeft: 10,
		};
	}, [theme.buttonStyle]);

	const okButton_click = () => {
		if (props.onClick) props.onClick({ buttonName: 'ok' });
	};


	const onKeyDown = (event: any) => {
		if (event.keyCode === 13) {
			okButton_click();
		}
	};

	const buttonComps = [];

	if (props.customButtons) {
		for (const b of props.customButtons) {
			buttonComps.push(
				<button key={b.name} style={buttonStyle} onClick={() => okButton_click()} onKeyDown={onKeyDown}>
					{b.label}
				</button>
			);
		}
	}

	if (props.okButtonShow !== false) {
		buttonComps.push(
			<button disabled={props.okButtonDisabled} key="ok" style={buttonStyle} onClick={okButton_click} ref={props.okButtonRef} onKeyDown={onKeyDown}>
				{props.okButtonLabel ? props.okButtonLabel : _('OK')}
			</button>
		);
	}

	return <div style={{ textAlign: 'right', marginTop: 10 }}>{buttonComps}</div>;
}
