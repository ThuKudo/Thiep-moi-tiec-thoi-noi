"use client";

import { RefObject, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "@/components/InvitationScene.module.css";
import { LeftPanel } from "@/components/LeftPanel";
import { RightPanel } from "@/components/RightPanel";
import {
  invitationConfig,
  SCENE_HEIGHT,
  SCENE_WIDTH,
} from "@/data/invitation";

type InvitationSceneProps = {
  overlayVisible: boolean;
  sceneRef?: RefObject<HTMLDivElement | null>;
};

export function InvitationScene({
  overlayVisible,
  sceneRef,
}: InvitationSceneProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const availableWidth = window.innerWidth - 36;
      const availableHeight = window.innerHeight - 36;
      const nextScale = Math.min(
        availableWidth / SCENE_WIDTH,
        availableHeight / SCENE_HEIGHT,
        1,
      );

      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const stageStyle = useMemo(
    () => ({
      transform: `scale(${scale})`,
    }),
    [scale],
  );

  return (
    <div className={styles.stage} style={stageStyle}>
      <div ref={sceneRef} className={styles.scene}>
        <LeftPanel />
        <RightPanel />
      </div>

      {overlayVisible && invitationConfig.referenceOverlaySrc ? (
        <Image
          src={invitationConfig.referenceOverlaySrc}
          alt="Reference overlay"
          fill
          className={styles.referenceOverlay}
          unoptimized
        />
      ) : null}
    </div>
  );
}
