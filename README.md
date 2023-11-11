# WebAssembly Counter Project

This project demonstrates a simple WebAssembly program written in Rust. The program implements a counter that can be incremented and decremented.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Rust](https://www.rust-lang.org/learn/get-started)
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)
- [wasm-bindgen](https://rustwasm.github.io/wasm-bindgen/whirlwind/setup.html)

## Building and Running

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/wasm-counter.git
   cd wasm-counter
   ```

2. Build the Rust project:

   ```bash
   cargo build --target wasm32-unknown-unknown
   ```

3. Generate JavaScript bindings:

   ```bash
   wasm-bindgen target/wasm32-unknown-unknown/debug/wasm_counter.wasm --out-dir www --web
   ```

4. Serve the project using a local server:

   ```bash
   # You can use http-server or any other server of your choice, for example: python -m http.server
   npx http-server www
   ```

5. Open your browser and navigate to [http://localhost:8080](http://localhost:8080) (or the port used by your local server).

## Usage

- The webpage will display the current counter value.
- Click the "Increment" button to increase the counter.
- Click the "Decrement" button to decrease the counter.

## License

This project is licensed under the [MIT License](LICENSE).