import { CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
export const AddressCopyIcon = ({
  className,
  address,
}: {
  className?: string;
  address: string;
}) => {
  const [addressCopied, setAddressCopied] = useState(false);
  return (
    <CopyToClipboard
      text={address}
      onCopy={() => {
        setAddressCopied(true);
        setTimeout(() => {
          setAddressCopied(false);
        }, 800);
      }}
    >
      <button onClick={(e) => e.stopPropagation()}>
        {addressCopied ? (
          <CheckCircleIcon className={className} aria-hidden="true" />
        ) : (
          <Copy className={className} aria-hidden="true" />
        )}
      </button>
    </CopyToClipboard>
  );
};
