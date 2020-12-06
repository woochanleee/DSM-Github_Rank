function inputEmptyAlert(index: number) {
  const hangule = ['첫', '두', '세', '네', '다섯', '여섯', '일곱', '여덟'];
  alert(`${hangule[index]}번째 입력칸을 채워주세요.`);
}

function stateChanger(key: string) {
  return function (value) {
    this.update((state) => {
      const { [key]: variable } = state;
      return {
        ...state,
        [key]: {
          ...variable,
          ...value,
        },
      };
    });
  };
}

export { inputEmptyAlert, stateChanger };
