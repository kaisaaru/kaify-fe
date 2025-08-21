// components/Modal.jsx
"use client";
import { useEffect, useId } from "react";

/**
 * Reusable Bootstrap modal
 *
 * Props:
 * - id?: string        -> optional; kalau tak diisi pakai auto id
 * - title: string
 * - size?: "sm"|"lg"|"xl"  -> default normal
 * - onClose?: () => void
 * - footer?: ReactNode     -> custom footer; kalau tak diisi pakai default buttons
 * - primaryText?: string   -> default: "Simpan"
 * - secondaryText?: string -> default: "Batal"
 * - onPrimary?: () => void | Promise<void>
 * - onSecondary?: () => void
 * - hideFooter?: boolean
 * - children: ReactNode    -> isi body
 */
export default function Modal({
  id,
  title,
  size,
  onClose,
  footer,
  primaryText = "Simpan",
  secondaryText = "Batal",
  onPrimary,
  onSecondary,
  hideFooter = false,
  children,
}) {
  const autoId = useId().replace(/:/g, "");
  const modalId = id || `modal-${autoId}`;

  // optional: cleanup backdrop kalau modal ditutup manual
  useEffect(() => {
    const el = document.getElementById(modalId);
    if (!el) return;

    const handler = () => onClose?.();
    el.addEventListener("hidden.bs.modal", handler);
    return () => el.removeEventListener("hidden.bs.modal", handler);
  }, [modalId, onClose]);

  return (
    <div className="modal fade" id={modalId} tabIndex={-1} aria-hidden="true">
      <div
        className={`modal-dialog ${size ? `modal-${size}` : ""} modal-dialog-centered`}
      >
        <div className="modal-content radius-16 bg-base">
          <div className="modal-header py-14 px-20 border border-top-0 border-start-0 border-end-0">
            <h1 className="modal-title fs-6">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body p-20">{children}</div>

          {!hideFooter && (
            <div className="modal-footer p-16 pt-0">
              {footer ?? (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm px-3 py-1"
                    data-bs-dismiss="modal"
                    onClick={onSecondary}
                  >
                    {secondaryText}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm px-3 py-1"
                    onClick={onPrimary}
                  >
                    {primaryText}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
