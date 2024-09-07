import Image from 'next/image';
// import logoSemgEdu from '@/public/SEMGEDU-Logo-Large.png'
import logoSemgEdu from '@/public/SEMGEDU-Logo-Small.png'
import logoSemgEduLarge from '@/public/SEMGEDU-Logo-Large.png'

interface AcmeLogoProps {
  variant?: "default" | "large";
}

export default function AcmeLogo({ variant = "default" }: AcmeLogoProps) {
  let src, width, height;

  if (variant == "default") {
    src = logoSemgEdu;
    width = 200;
    height = 200;
  } else {
    src = logoSemgEduLarge;
    width = 300;
    height = 300;
  }

  return (
      <Image
        src={src}
        width={width}
        height={height}
        className="p-4"
        alt="SEMG.edu company logo desktop version"
      />
  );
}

