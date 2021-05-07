import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/**
 * Cases to add memo()
 *
 * 1. Pure Functional Components (A mesma coisa que é recebido é retornado)
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to large size
 */
