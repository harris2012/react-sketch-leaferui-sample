import React, { createRef, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import page0 from './sketch-002/pages/638A13B9-4B22-47E2-BDBA-C94201BDEF82'

import { Leafer, Rect, Text, Path, Frame, PointerEvent } from 'leafer-ui'




const App = () => {

    const ref = createRef();

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {

        const leafer = new Leafer({ view: ref.current })

        //const rect = new Rect({
        //    x: 100,
        //    y: 100,
        //    width: 200,
        //    height: 200,
        //    fill: '#32cd79',
        //    draggable: true
        //})

        //leafer.add(rect);

        console.log(page0);

        for (var layer of page0.layers) {
            const dd = renderLayer(layer)
            if (dd !== null) {
                leafer.add(dd);
            }
        }
    }, [ref])


    const renderLayer = (layer, leafer) => {

        let zz = null;

        switch (layer._class) {
            case 'text':
                zz = render_text(layer, leafer);
                break;
            case 'rectangle':
                zz = render_rectangle(layer, leafer);
                break;
            case 'shapePath':
                zz = render_shapePath(layer, leafer);
                break;
            case 'symbolMaster':
                zz = render_symbolMaster(layer, leafer);
                break;
            case 'symbolInstance':
                zz = render_symbolInstance(layer, leafer);
                break;
            case 'bitmap':
                zz = render_bitmap(layer, leafer);
                break;
            case 'group':
                zz = render_group(layer, leafer);
                break;
            case 'oval':
                zz = render_oval(layer, leafer);
                break;
            case 'shapeGroup':
                zz = render_shapeGroup(layer, leafer);
                break;

            default:
                console.log(layer._class);
                break;
        }

        if (zz === null) {
            return null;
        }

        if (layer.layers && layer.layers) {
            for (var x of layer.layers) {
                const uu = renderLayer(x);
                if (uu !== null) {
                    zz.add(uu);
                }
            }
        }

        return zz;
    }

    const render_text = (layer, leafer) => {

        const { x, y, width, height } = layer.frame;

        const t = new Text({
            x,
            y,
            width,
            height,
            fill: '#000',
            text: layer.attributedString.string,
            fontSize: layer.attributedString.attributes[0].attributes.MSAttributedStringFontAttribute.attributes.size,
            textAlign: 'center'
        })

        t.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return t;
    }

    const render_rectangle = (layer, leafer) => {

        const { x, y, width, height } = layer.frame;

        const rect = new Rect({
            x,
            y,
            width,
            height,
            fill: 'rgba(0, 0, 0, 0.2)'
        })

        rect.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return rect;
    }

    const render_shapePath = (layer, leafer) => {
        return null;
    }

    const render_symbolMaster = (layer, leafer) => {

        const { x, y, width, height } = layer.frame;

        const d = new Frame({
            x,
            y,
            width,
            height,
        });

        return d;
    }

    const render_symbolInstance = (layer, leafer) => {

        console.log(layer._class)

        const { x, y, width, height } = layer.frame;

        const rect = new Rect({
            x,
            y,
            width,
            height,
            fill: 'rgba(0, 0, 0, 0.2)'
        })

        rect.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return rect;
    }

    const render_bitmap = (layer, leafer) => {

        console.log(layer._class)

        const { x, y, width, height } = layer.frame;

        const rect = new Rect({
            x,
            y,
            width,
            height,
            fill: 'rgba(0, 0, 0, 0.2)'
        })

        rect.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return rect;
    }

    const render_group = (layer, leafer) => {

        console.log(layer._class)

        const { x, y, width, height } = layer.frame;

        const rect = new Rect({
            x,
            y,
            width,
            height,
            fill: 'rgba(0, 0, 0, 0.2)'
        })

        rect.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return rect;
    }

    const render_oval = (layer, leafer) => {

        console.log(layer._class)

        const { x, y, width, height } = layer.frame;

        const rect = new Rect({
            x,
            y,
            width,
            height,
            fill: 'rgba(0, 0, 0, 0.2)'
        })

        rect.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return rect;
    }

    const render_shapeGroup = (layer, leafer) => {

        console.log(layer._class)

        const { x, y, width, height } = layer.frame;

        const rect = new Rect({
            x,
            y,
            width,
            height,
            fill: 'rgba(0, 0, 0, 0.2)'
        })

        rect.on(PointerEvent.TAP, () => {
            setX(x);
            setY(y);
            setWidth(width)
            setHeight(height);
        })

        return rect;
    }

    return <>
        <div ref={ref} style={{ display: 'inline-block', width: '1200px', height: '1000px', border: '1px solid #f00' }}></div>
        <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '300px', borderLeft: '1px solid #ccc', background: '#eee' }}>
            <div>x = {x}</div>
            <div>y = {y}</div>
            <div>width = {width}</div>
            <div>height = {height}</div>
        </div>
    </>
}

createRoot(document.getElementById("root")).render(<App />);
