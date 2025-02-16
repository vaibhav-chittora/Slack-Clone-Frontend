export default function combineContext(...providers) {
  // this function will combine multiple context providers and returns a single provider

  return ({ children }) => {
    //using reduceRight to iterate over the providers in reverse order (from right to left)
    return providers.reduceRight((accumulator, CurrentProvider) => {
      return <CurrentProvider>{accumulator}</CurrentProvider>;
    }, children)/*keeping children as the initial value because we want to render the last provider first*/
  };
}

/**
 * to solve the problem of context hell
 *
 * <A>
 *     <B>
 *          <C>
 *              <D>
 *                  {children}
 *              </D>
 *         </C>
 *    </B>
 * </A>
 */

/**
 * we want this type of structure
 * <CombinedProvider>
 * {children}
 * </CombinedProvider>
 *
 */
