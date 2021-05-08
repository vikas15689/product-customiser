import Product from "./../model/Product";
import Component from "./../model/Component";
import Variant from "./../model/Variant";
/**
 * Creating Product instance using components and variants
 */
const processorComponent = new Component("Processor")
    .withVariant(
        new Variant(
            `2.3GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 4.8 GHz `,
            0,
            true
        )
    )
    .withVariant(
        new Variant(
            `2.4GHz 8-core 9th-generation Intel Core i9 processor, Turbo Boost up to 5.0GHz`,
            20000
        )
    );
const memoryComponent = new Component("Memory")
    .withVariant(
        new Variant(
            `16GB 2666MHz DDR4 memory`,
            0,
            true
        )
    )
    .withVariant(
        new Variant(
            `32GB 2666MHz DDR4 memory`,
            40000
        )
    ).withVariant(
        new Variant(
            `64GB 2666MHz DDR4 memory`,
            80000
        )
    );
const graphicsComponent = new Component("Graphics")
    .withVariant(
        new Variant(
            `AMD Radeon Pro 5500M with 4GB of GDDR6 memory`,
            0,
            true
        )
    )
    .withVariant(
        new Variant(
            `AMD Radeon Pro 5500M with 8GB of GDDR6 memory`,
            10000
        )
    ).withVariant(
        new Variant(
            `AMD Radeon Pro 5600M with 8GB of HBM2 memory`,
            70000
        )
    );
const storageComponent = new Component("Storage")
    .withVariant(
        new Variant(
            `1TB SSD storage`,
            0,
            true
        )
    )
    .withVariant(
        new Variant(
            `2TB SSD storage`,
            40000
        )
    ).withVariant(
        new Variant(
            `4TB SSD storage`,
            100000
        )
    ).withVariant(
        new Variant(
            `8TB SSD storage`,
            220000
        )
    );


export default new Product("16‑inch MacBook Pro - Space Grey", 239900)
    .withComponent(processorComponent)
    .withComponent(memoryComponent)
    .withComponent(graphicsComponent)
    .withComponent(storageComponent)
    .withDefaultSpec(['16 - inch Retina display with True Tone', 'Four Thunderbolt 3 ports', 'Touch Bar and Touch ID', 'Backlit Magic Keyboard - US English']);