"use client";

export default function VerticalChain() {
  // Generate array of links
  const chainLinks = Array.from({ length: 4 }).map((_, index) => {
    const isHorizontal = index % 2 === 1;

    return (
      <div
        key={index}
        className={`relative ${
          isHorizontal ? "rotate-90" : ""
        } transition-all duration-300`}
        style={{
          marginTop: index === 0 ? 0 : "5px",
          zIndex: index % 2 === 0 ? 10 : 0,
        }}
      >
        {!isHorizontal ? (
          // Vertical solid link - very thick and light colored
          <div className="w-4 h-[50px] bg-zinc-800 border-[4px] border-t-0 border-b-0 rounded-xl border-zinc-900  shadow-lg" />
        ) : (
          // Horizontal link with hole
          <div
            className={`
              w-[70px] h-[30px]
              bg-[#363432]
              shadow-md
              border-2 border-solid rounded-2xl border-zinc-800
              relative
            `}
            style={{
              WebkitMask: "radial-gradient(transparent 40%, black 40%)",
              mask: "radial-gradient(transparent 30%, black 40%)",
              WebkitMaskComposite: "source-out",
              maskComposite: "subtract",
            }}
          >
            {/* Metallic highlights */}
            <>
              {/* Bottom shadow */}
              <div className="absolute bottom-[4px] left-[15px] right-[15px] h-[1px] bg-black opacity-30 rounded-full"></div>

              {/* Right shadow */}
              <div className="absolute top-[8px] bottom-[8px] right-[6px] w-[1px] bg-black opacity-20 rounded-full"></div>

              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]"></div>
            </>
          </div>
        )}
      </div>
    );
  });

  return <div className="flex flex-col items-center">{chainLinks}</div>;
}
