import React from 'react';
import { Property } from "csstype";
import AddMap from "@/ui/PointBlock/AddMap/AddMap";
import AddTag from "@/ui/PointBlock/AddTag/AddTag";
import {
    StyledPointBlockBody,
    StyledPointBlockContainer,
    StyledPointBlockFooter,
    StyledPointBlockHeader
} from "@/ui/PointBlock/styled";

type PointBlockTypes = 'addMap' | 'addTag' | ''

type PointBlockPropsType = {
    type: PointBlockTypes
}

function get(obj: PointBlockContentType, key: PointBlockTypes) {
    return obj && key && obj[key] ? obj[key] : {};
}

export const PointBlock = (props: PointBlockPropsType) => {
    return (
        <PointBlockView
            header={ get(PointBlockContent, props.type).header }
            body={ get(PointBlockContent, props.type).body }
            footer={ get(PointBlockContent, props.type).footer }
            width={ get(PointBlockContent, props.type).width }
            bottom={ get(PointBlockContent, props.type).bottom }
            left={ get(PointBlockContent, props.type).left }
        />
    );
}

function PointBlockView({ header, footer, body, bottom, width, left, ...props }) {
    return (
        <StyledPointBlockContainer left={ left } width={ width } bottom={ bottom }>
            <StyledPointBlockHeader>{ header }</StyledPointBlockHeader>
            <StyledPointBlockBody>{ body }</StyledPointBlockBody>
            <StyledPointBlockFooter>{ footer }</StyledPointBlockFooter>
        </StyledPointBlockContainer>
    );
}

type PointBlockContentType = {
    [key in PointBlockTypes]: {
        header: string,
        body: React.ReactNode,
        width?: Property.Width,
        left?: Property.Left,
        bottom?: Property.Bottom
    };
};
export const PointBlockContent: PointBlockContentType = {
    'addMap': {
        header: 'Добавить дополнительные параметры',
        body: <AddMap />,
        width: '230px',
        bottom: '50px',
    },
    'addTag': {
        header: 'Добавить тег',
        body: <AddTag />,
        width: '100%',
        left: '0',
        bottom: '35px',
    },
};


