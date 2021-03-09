#### Heaps' Law

The relation between types and tokens can be explained by the **Heaps' law** (also called Herdan's law) which describes the number of distinct words in a document (types) as a function of the document length(tokens). It can be formulated as:

<p align="center">V = f(n) = Kn<sup>&#946;</sup></p>

where V = types
          n = tokens
          K and &#946; are free parameters determined empirically
          The values of the parameters depend on the language and with English text corpora, typically K is between 10 and 100, and  &#946; is between 0.4 and 0.6.

Applying logarithmics to both sides of the equation, we get:

<p align="center">logV = logK + &#946;logn</p>

which is an equation of a straight line with intercept logK and slope  &#946;. Heap's Law implies that as we gather larger copora (more instances of tokens), the number of distinct types returned gets diminished as we exhaust the discovery of full vocabulary.

