import Image from "next/image";

export default function Cover({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: any;
}) {
  return (
    <div className="relative h-screen max-h-[700px] flex flex-col justify-between">
      <div className="absolute w-full h-full left-0 top-0 bg-black">
        <div className="relative w-full h-full [&>img]:object-cover">
          <Image alt="image-cover" src="/envelope-cover.jpg" fill />
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between p-8 font-belle text-sm text-black">
          <div>Wedding Invitation by</div>
          <div>Mei 14, 2023</div>
        </div>
        <div className="mt-4">
          <div className="envelope-bride-name">anjani</div>
          <div className="envelope-bride-name text-right">
            <span className="envelope-bride-join">&</span>
            <span>irul</span>
          </div>
        </div>
      </div>
      <div className="envelope-bottom">
        <div className="envelope-invited">Dear: weekend</div>
        <div className="envelope-cta-group">
          <button className="btn-invitation" type="button">
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}
