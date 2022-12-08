export default function wrapping(gifts) {
  const wrappedGifts = gifts.map((e) => {
    let size = e.length,
      wrapped = "*";
    wrapped = wrapped.repeat(size + 2);
    const wrappedGift = `${wrapped}\n*${e}*\n${wrapped}`;

    return wrappedGift;
  });

  return wrappedGifts;
}
