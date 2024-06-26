export const CurrencySwitcherLoader = () => (
    <div className='flex items-center justify-between border-solid gap-16 h-[72px] p-16 rounded-default border-1 border-system-light-active-background w-full lg:w-auto'>
        <div className='w-40 h-40 rounded-full animate-pulse bg-solid-slate-100' />
        <div className='space-y-10 grow'>
            <div className='h-8 animate-pulse bg-solid-slate-100 w-50 rounded-xs' />
            <div className='animate-pulse bg-solid-slate-100 w-[100px] h-12 rounded-xs' />
        </div>
    </div>
);
