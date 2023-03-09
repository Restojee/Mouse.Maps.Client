import React from 'react';
import { Property } from "csstype";
import AddTag from "@/ui/PointBlock/AddTag/AddTag";
import {
    StyledPointBlockBody,
    StyledPointBlockContainer,
    StyledPointBlockFooter,
    StyledPointBlockHeader
} from "@/ui/PointBlock/styled";
import { AddMap } from "@/ui/PointBlock/AddMap/AddMap";


type PointBlockPropsType = {
    type: PointBlockTypes,
    isVisible: boolean
}
export const PointBlock = (props: PointBlockPropsType) => {
    return (
        <PointBlockView
            isVisible={props.isVisible}
            header={ get(PointBlockContent, props.type).header }
            body={ get(PointBlockContent, props.type).body }
            footer={ get(PointBlockContent, props.type).footer }
            width={ get(PointBlockContent, props.type).width }
            bottom={ get(PointBlockContent, props.type).bottom }
            left={ get(PointBlockContent, props.type).left }
        />
    );
}


type PointBlockViewPropsType = {
    header: string,
    body: React.ReactNode,
    width: Property.Width,
    left: Property.Left,
    bottom: Property.Bottom,
    footer: React.ReactNode,
    isVisible: boolean
}
function PointBlockView(props: Partial<PointBlockViewPropsType>) {
    return (
        <StyledPointBlockContainer isVisible={props.isVisible} left={ props.left } width={ props.width } bottom={ props.bottom }>
            <StyledPointBlockHeader>{ props.header }</StyledPointBlockHeader>
            <StyledPointBlockBody>{ props.body }</StyledPointBlockBody>
            <StyledPointBlockFooter>{ props.footer }</StyledPointBlockFooter>
        </StyledPointBlockContainer>
    );
}


type PointBlockTypes = 'addMap' | 'addTag'

function get(obj: PointBlockContentType, key: PointBlockTypes) {
    return obj && key && obj[key] ? obj[key] : {};
}

type PointBlockContentType = {
    [key in PointBlockTypes]: Partial<PointBlockViewPropsType>;
};
export const PointBlockContent: PointBlockContentType = {
    'addMap': {
        header: 'Добавить дополнительные параметры',
        body: <AddMap />,
        width: '230px',
        bottom: '60px',
    },
    'addTag': {
        header: 'Добавить тег',
        body: <AddTag />,
        width: '100%',
        left: '0',
        bottom: '35px',
    },
};


