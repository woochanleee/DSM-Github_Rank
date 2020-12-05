function NotEmpty() {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const validations = ['null', 'undefined', ''];

    descriptor.value = function validate(...args) {
      let foundIndex = -1;

      args.some((argument, i) => {
        const index = validations.findIndex(
          (validation) => validation === '' + argument
        );
        if (~index) {
          foundIndex = i;
          return true;
        }
      });

      return foundIndex;
    };

    return descriptor;
  };
}

export { NotEmpty };
